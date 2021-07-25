import { getBlogs } from "./api.js";

export const parseRequestUrl = () => {
  const url = document.location.hash.toLowerCase();
  const request = url.split("/");
  return {
    resource: request[1],
    slug: request[2],
    verb: request[3],
  };
};

export const showLoading = () => {
  document.getElementById("loading").classList.add("active");
};

export const hideLoading = () => {
  document.getElementById("loading").classList.remove("active");
};

export const setBlogsItems = async () => {
  const blogs = await getBlogs();
  let newBlog = [];
  newBlog = blogs.map((blog) => [...newBlog, blog]);
  localStorage.setItem("blogs", JSON.stringify(blogs));
};

export const getBlogsItems = () => {
  const blogItems = localStorage.getItem("blogs")
    ? JSON.parse(localStorage.getItem("blogs"))
    : [];

  return blogItems;
};
