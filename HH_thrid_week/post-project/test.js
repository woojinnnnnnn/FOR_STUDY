// 카테고리별 정보 변경 API
router.patch("/categories/:id", async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, order } = req.body;
  
      const category = await prisma.category.findUnique({
        where: { id: +id },
      });
  
      if (!category) throw { name: "CastError" }
  
      const updatedCategory = Joi.object ({
        name: Joi.string().min(1).max(20),
        order: Joi.number().min(1).max(50),
      })
      const validateBody = await updatedCategory.validateAsync(req.body)
      if(!validateBody.order) throw { name: "ValidationError" }
      if (order !== undefined && order !== category.order) {
        // order 값이 변경되고, 변경된 값이 현재의 값과 다를 때 중복 체크 수행
        const existingCategoryWithOrder = await prisma.category.findFirst({
          where: {
            order: +order,
            id: { not: +id }, // 현재 수정 중인 카테고리 제외
          },
        });
  
        if (existingCategoryWithOrder) {
          // 중복된 order 값이 이미 존재하면 교환
          await prisma.category.updateMany({
            where: {
              OR: [{ id: +id }, { order: +order }],
            },
            data: {
              order: {
                set: category.order,
              },
            },
          });
        }
      }
  
      const Category = await prisma.category.update({
        where: { id: +id },
        data: { 
          name: validateBody.name,
          order: validateBody.order,
        },
      });
  
      return res
        .status(200)
        .json({ message: "수정에 성공했습니다.", data: Category });
    } catch (err) {
      next(err)
    }
  });