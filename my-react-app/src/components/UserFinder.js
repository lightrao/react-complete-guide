import { Fragment, /*  useState, useEffect, */ Component } from "react";

import Users from "./Users";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

class UserFinder extends Component {
  // you can only connect a class based component to one context
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  // will only run once when the component initially was rendered for the first time
  // Equivalent to useEffect with no dependency
  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });
  }

  // alternative to useEffect(...) for fonctional component
  // called automatically by React whenever current component is re-evaluated because it's state or props changed
  // the two params are the last props and state snapshot before the current component update
  componentDidUpdate(prevProps, prevState) {
    // use if statment to avoid  infinite loop
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
    // we could derive our filtered users and set them in our state update here
  }

  render() {
    return (
      <Fragment>
        {/* <UsersContext.Consumer></UsersContext.Consumer> */}
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   // run when the component rendered the first time or the dependencies change
//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     console.log("searchChangeHandler are running...");
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
