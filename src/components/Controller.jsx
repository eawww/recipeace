import React, { useEffect, useState, useRef } from "react";
import socketIOClient from "socket.io-client";
import { Link } from "react-router-dom";

const Controller = () => {
  const socketRef = useRef();
  useEffect(() => {
    socketRef.current = socketIOClient("/controller");
  }, []);
  const sendIt = e => {
    socketRef.current.emit(e.target.value);
  };
  return (
    <div>
      <h1>Controller!</h1>
      <Link to={"/"}>
        <h2>Home</h2>
      </Link>
      <input type="text" ref={textRef} />
      <button onClick={sendIt} />
    </div>
  );
};

export default Controller;
