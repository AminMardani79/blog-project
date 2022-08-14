import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { sliceContent } from "../../helper/functions";

function BlogCard({ post }) {
  const { slug, author, coverImage, title, content } = post;
  return (
    <Card sx={{ boxShadow: "0px 5px 13px -6px rgba(0,0,0,0.45)" }}>
      {author && (
        <Link
          to={`/author/${author.slug}`}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <CardHeader
            avatar={<Avatar src={author.avatar.url} sx={{ marginLeft: 1 }} />}
            title={author.name}
            subheader={author.field}
          />
        </Link>
      )}
      <CardMedia
        component="img"
        height="194"
        image={coverImage.url}
        alt={slug}
      />
      <CardContent>
        <Link
          to={`/blog/${slug}`}
          style={{ textDecoration: "none", color: "#000" }}
        >
          <Typography component="h2" variant="subtitle1">
            {title}
          </Typography>
        </Link>
        <Typography component="p" variant="p" fontWeight={400} fontSize={13}>
          {sliceContent(content.text)} ...
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BlogCard;
