import React from 'react';
import './r3.css';
import ReactPlayer from 'react-player';

const R3 = () => {
  return (
    <div className='container'>
      <div className='container_left'>
        <ReactPlayer
          width='100%'
          height='100%'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
        />
      </div>
      <div className='container_right'>
        <h1 className='title'>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when
        </h1>
        <p>
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Why do we use it? It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout. The point of using Lorem
          Ipsum is that it has a more-or-less normal distribution of letters, as
          opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publish
        </p>
      </div>
    </div>
  );
};

export default R3;
