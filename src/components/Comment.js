import { useState, useRef, useEffect } from "react";
import Action from "./Action";
import { ReactComponent as DownArrow } from "../assets/images/arrowDown.svg";
import { ReactComponent as UpArrow } from "../assets/images/arrowUp.svg";

const Comment = ({
    handleInsertNode,
    handleEditNode,
    handleDeleteNode,
    comment,
}) => {
    const [input, setInput] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [expand, setExpand] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef?.current?.focus();
    }, [editMode]);

    const handleNewComment = () => {
        setExpand(!expand);
        setShowInput(true);
    };

    const onAddComment = () => {
        if (editMode) {
            handleEditNode(comment.id, inputRef?.current?.innerText);
        } else {
            setExpand(true);
            handleInsertNode(comment.id, input);
            setShowInput(false);
            setInput("");
        }

        if (editMode) setEditMode(false);
    };

    const handleDelete = () => {
        handleDeleteNode(comment.id);
    };

    return (
        <div className="p-4">
            <div className={comment.id === 1 ? "bg-gray-100 p-4 rounded-md shadow-md" : "bg-white p-4 rounded-md border border-gray-300 shadow-sm"}>
                {comment.id === 1 ? (
                    <>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoFocus
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type..."
                        />
                        <div className="mt-2 flex space-x-2">
                            <Action
                                className="cursor-pointer bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
                                type="COMMENT"
                                handleClick={onAddComment}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <span
                            contentEditable={editMode}
                            suppressContentEditableWarning={editMode}
                            ref={inputRef}
                            className={`block ${editMode ? "border border-gray-300 p-2 rounded-md" : "break-words"}`}
                        >
                            {comment.name}
                        </span>
                        <div className="mt-2 flex space-x-2">
                            {editMode ? (
                                <>
                                    <Action
                                        className="cursor-pointer bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600"
                                        type="SAVE"
                                        handleClick={onAddComment}
                                    />
                                    <Action
                                        className="cursor-pointer bg-gray-500 text-white py-1 px-3 rounded-md hover:bg-gray-600"
                                        type="CANCEL"
                                        handleClick={() => {
                                            if (inputRef.current) inputRef.current.innerText = comment.name;
                                            setEditMode(false);
                                        }}
                                    />
                                </>
                            ) : (
                                <>
                                    <Action
                                        className="cursor-pointer bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300 flex items-center space-x-1"
                                        type={
                                            <>
                                                {expand ? (
                                                    <UpArrow width="10px" height="10px" className="text-gray-600" />
                                                ) : (
                                                    <DownArrow width="10px" height="10px" className="text-gray-600" />
                                                )}
                                                <span>REPLY</span>
                                            </>
                                        }
                                        handleClick={handleNewComment}
                                    />
                                    <Action
                                        className="cursor-pointer bg-gray-200 text-gray-700 py-1 px-3 rounded-md hover:bg-gray-300"
                                        type="EDIT"
                                        handleClick={() => setEditMode(true)}
                                    />
                                    <Action
                                        className="cursor-pointer bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600"
                                        type="DELETE"
                                        handleClick={handleDelete}
                                    />
                                </>
                            )}
                        </div>
                    </>
                )}
            </div>

            <div className={`mt-4 pl-6 ${expand ? "block" : "hidden"}`}>
                {showInput && (
                    <div className="bg-gray-100 p-4 rounded-md shadow-md">
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            autoFocus
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <div className="mt-2 flex space-x-2">
                            <Action
                                className="cursor-pointer bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600"
                                type="REPLY"
                                handleClick={onAddComment}
                            />
                            <Action
                                className="cursor-pointer bg-gray-500 text-white py-1 px-3 rounded-md hover:bg-gray-600"
                                type="CANCEL"
                                handleClick={() => {
                                    setShowInput(false);
                                    if (!comment?.items?.length) setExpand(false);
                                }}
                            />
                        </div>
                    </div>
                )}

                {comment?.items?.map((cmnt) => (
                    <Comment
                        key={cmnt.id}
                        handleInsertNode={handleInsertNode}
                        handleEditNode={handleEditNode}
                        handleDeleteNode={handleDeleteNode}
                        comment={cmnt}
                    />
                ))}
            </div>
        </div>

    );
};

export default Comment;