import 'reset-css';
import './css/main.styl';
import './js/main.js';

require('jquery')
require('jquery-ui-bundle')
require('slick-carousel')

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
dom.watch();