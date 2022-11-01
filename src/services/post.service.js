const { BlogPost, PostCategory, User, Category } = require('../models');

const createPost = async ({ title, content, categoryIds }, { email }) => {
  const categories = categoryIds.map((id) => Category.findOne({
    where: { id },
  }));

  const resolvedPromises = await Promise.all(categories);

  if (resolvedPromises.some((item) => item === null)) {
    return { type: 'INVALID_VALUES', message: 'one or more "categoryIds" not found' };
  }

  const { dataValues: { id: userId } } = await User.findOne({ where: { email } });

  const { dataValues } = await BlogPost.create({ title, content, userId });

  const { id: postId } = dataValues;
  await Promise.all(
    categoryIds.map(async (id) => {
      await PostCategory.create({ postId, categoryId: id });
    }),
  );

  return dataValues;
};

module.exports = {
  createPost,
};