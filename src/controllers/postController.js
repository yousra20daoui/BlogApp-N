const Post = require('../models/post');

// Create a new post
exports.createPost = async (req, res) => {
    try {
      const post = await Post.create(req.body);
      console.log("post created succefuly");
      res.status(201).json(post);
    } catch (err) {
        console.error("Error adding new post:", error);
      res.status(400).json({ message: err.message });
    }
  };

  // Get all posts
exports.getAllPosts = async (req, res) => {
    try {
      const posts = await Post.find();
      res.json(posts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  // Get a single post
exports.getPostById = async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json(post);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  // Update a post
exports.updatePost = async (req, res) => {
    try {
      const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      console.log("post updated succefuly");
      res.json(post);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };

  // Delete a post
exports.deletePost = async (req, res) => {
    try {
      const post = await Post.findByIdAndDelete(req.params.id);
      if (!post) {
        return res.status(404).json({ message: 'Post not found' });
      }
      res.json({ message: 'Post deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };