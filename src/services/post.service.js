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

// Requirement 13
const getPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

// Requirement 14
const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories' },
    ],
  });
  if (post) return { type: null, message: post };
  return { type: 'NOT_FOUND', message: 'Post does not exist' };
};

// Requirement 15
const findExistingId = async (id) => {
  const blogPostId = await BlogPost.findOne({ where: { id } });
  return blogPostId;
};

const updatePost = async (userId, id, { title, content }) => {
  const blogPostId = await findExistingId(userId);
  if (blogPostId.userId !== userId) {
    return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
  }

await BlogPost.update({ title, content }, { where: { id } });

const result = await getPostById(id);

return result;
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
};