import React from "react";
import "../index.css";

const Square = ({value, onClick}) => {
  return (
      <button
        className="square"
        onClick={() => {
          onClick()
        }}
      >
        {value}
      </button>
  );
};

export default Square;

// class Square extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       value: null,
// //     };
// //   }
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => {
//           this.props.onClick()
//         }}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

// export default Square;
