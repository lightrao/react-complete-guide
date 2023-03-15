import prs from "./person";
console.log(prs);

// import { baseData as data, clean } from "./utility";
// console.log(data);
// clean();

import * as bundled from "./utility";
console.log(bundled.baseData);
bundled.clean();
