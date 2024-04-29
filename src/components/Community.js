import React, { useState } from "react";
import "../components/Community.css";
import Navbar from "../components/Navbar";
import { LuUpload } from "react-icons/lu";
import { IoCloseCircleOutline } from "react-icons/io5";
import CommunityPostsData from "../assets/CommunityPosts";
import CommunityPostCard from "./CommunityPostCard";
import UserAvatar from "../assets/avatar-dp.jpg";

function Community() {
    const [postContent, setPostContent] = useState("");
    const [uploadedImg, setUploadedImg] = useState(null);
    const [showCreatePostBtn, setShowCreatePostBtn] = useState(false);

    const handleChange = (event) => {
        const textareaLineHeight = 24;
        const minRows = 3;
        event.target.rows = minRows;
        const currentRows = Math.floor(
            event.target.scrollHeight / textareaLineHeight
        );
        event.target.rows = currentRows;
        setPostContent(event.target.value);
        setShowCreatePostBtn(
            event.target.value.trim().length > 0 || uploadedImg
        );
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
            const reader = new FileReader();
            reader.onload = () => {
                setUploadedImg(reader.result);
                setShowCreatePostBtn(true);
            };
            reader.readAsDataURL(file);
        } else {
            // Handle invalid file type
            alert("Please upload a valid JPEG or PNG image.");
        }
    };

    const handleRemoveImage = () => {
        setUploadedImg(null);
        setShowCreatePostBtn(postContent.trim().length > 0);
    };

    const handleCreatePost = () => {
        // Logic for creating a post
        if (uploadedImg) {
            // Remove the uploaded image
            setUploadedImg(null);
            // Update button visibility
            setShowCreatePostBtn(postContent.trim().length > 0);
        }
    };

    return (
        <div>
            <Navbar />
            <div className="communityPosts">
                <div className="createPostContainer">
                    <h2>Create Post</h2>
                    <div className="createPostInputs">
                        <div className="userAvatar">
                            <img src={UserAvatar} alt="User Avatar" />
                        </div>
                        <textarea
                            id="postContent"
                            value={postContent}
                            onChange={handleChange}
                            placeholder="Share us your Furry journey!"
                        ></textarea>
                        <label htmlFor="uploadImg" className="uploadImgBtn">
                            <LuUpload /> Upload Image
                        </label>
                        <input
                            type="file"
                            id="uploadImg"
                            accept=".jpg,.jpeg,.png"
                            style={{ display: "none" }}
                            onChange={handleImageUpload}
                        />
                    </div>
                    <div className="uploadedImgContainer">
                        {uploadedImg && (
                            <>
                                <IoCloseCircleOutline
                                    className="removeImgBtn"
                                    onClick={handleRemoveImage}
                                />
                                <img src={uploadedImg} />
                            </>
                        )}
                    </div>
                    {showCreatePostBtn && (
                        <button
                            className="createPostBtn"
                            onClick={handleCreatePost}
                        >
                            Create Post
                        </button>
                    )}
                </div>
                <div className="postsContainer">
                    {CommunityPostsData.map((post, i) => {
                        return (
                            <CommunityPostCard
                                key={i}
                                userAvatar={post.userAvatar}
                                accountName={post.accountName}
                                datePosted={post.datePosted}
                                postImage={post.postImage}
                                postContent={post.postContent}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Community;
