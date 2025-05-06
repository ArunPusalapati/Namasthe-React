/**
 * <div id="parent">
 *   <div id="child">
 *       <h1>I am h1 tag>/h1>
 *       <h2> I am h2 tag</h2>
 *   </div>
 * <div id="child2">
 *       <h1>I am h1 tag>/h1>
 *       <h2> I am h2 tag</h2>
 *   </div>
 * 
 * </div>
 */
import ReactDOM from "react-dom/client" ;

const TitleComponent=()=>(
    <h1 className="title">Welcome to title of page</h1>
);
const HeadingComponent=()=>(
    <div id="heading">
        <TitleComponent />
        <h2 id="content">Content starts heare</h2>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);