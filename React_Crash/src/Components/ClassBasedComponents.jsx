import { Component } from "react";

export default class ClassBasedComponent extends Component {
  state = {
    showText: false,
    changeColor: false,
  };

  handleclick = () => {
    console.log("button clicked");
    // this.state.showText = !this.state.showText  // Not recommended as it does not re-render the text
    const { showText, changeColor } = this.state;
    this.setState({
      showText: !showText,
      changeColor: !changeColor,
    });
  };
  
  // componentDidMount() - Called immediately after a component is mounted. Setting state here will trigger re-rendering.
  componentDidMount(){
    console.log("DidMount called first time on page reload");
  }
  // componentWillUnmount()
  // componentDidUpdate()
  

  render() {
    console.log(this.state);
    const { showText, changeColor } = this.state;

    return (
      <div className="flex flex-col justify-center items-center gap-2 p-2">
        {showText ? (
          <h1>ClassBased Component 1</h1>
        ) : (
          <h1 style={{ color: changeColor ? "black" : "red" }}>
            ClassBased Component 2
          </h1>
        )}
        <button
          className="border-[3px] border-slate-200 p-2 bg-slate-800 text-slate-400"
          onClick={this.handleclick}
        >
          Toggle Heading
        </button>
      </div>
    );
  }
}
