import { useFetcher } from "react-router-dom";

import classes from "./NewsletterSignup.module.css";
import { useEffect } from "react";

function NewsletterSignup() {
  const fetcher = useFetcher();
  // use object Destructuring to pull out that data property, that data object, which is returned
  // by the action or loader that's being triggered.
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    // this form is included on all routes because it's part of the main navigation.
    // fetcher.Form will actually still trigger an action but it will not initialize a route transition,
    // will not move to a different route.
    // fetcher.Form should basically be used whenever you wanna trigger, an action, or also a loader with help
    // of the load function without actually navigating to the page to which the loader belongs or the page
    // to which the action belongs. But default Form provided by React Router, we will forwarded to the
    // "newsletter" route after submitting this.
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        name="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
