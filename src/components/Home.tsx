import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center p-1 h-screen">
        <h1 className="text-3xl font-bold ">
          Ласкаво просимо на головну сторінку!
        </h1>
        <p className="text-lg">
          Оберіть одну з послуг для переходу на відповідну сторінку.
        </p>
      </div>
    );
  }
}

export default Home;
