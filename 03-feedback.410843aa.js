function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=l||f||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,a,o,r,u,l,f=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=a;return i=a=void 0,f=t,r=e.apply(o,n)}function j(e){return f=e,u=setTimeout(h,t),c?y(e):r}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-f>=o}function h(){var e=v();if(S(e))return w(e);u=setTimeout(h,function(e){var n=t-(e-l);return s?d(n,o-(e-f)):n}(e))}function w(e){return u=void 0,g&&i?y(e):(i=a=void 0,r)}function O(){var e=v(),n=S(e);if(i=arguments,a=this,l=e,n){if(void 0===u)return j(l);if(s)return u=setTimeout(h,t),y(l)}return void 0===u&&(u=setTimeout(h,t)),r}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(b(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==u&&clearTimeout(u),f=0,i=l=a=u=void 0},O.flush=function(){return void 0===u?r:w(v())},O}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||r.test(e)?u(e.slice(2),n?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),g(e,t,{leading:i,maxWait:t,trailing:a})};const y=document.querySelector(".feedback-form"),j=y.querySelector('input[name="email"]'),S=y.querySelector('textarea[name="message"]');y.addEventListener("input",e(t)((()=>{const e={email:j.value,message:S.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));(()=>{const e=JSON.parse(localStorage.getItem("feedback-form-state"));e?(j.value=e.email,S.value=e.message):(j.value="",S.value="")})(),y.addEventListener("submit",(function(e){if(e.preventDefault(),""===j.value.trim()||""===S.value.trim())return void alert("Please fill in all fields.");console.log("Form data submitted:",{email:y.email.value,message:y.message.value}),localStorage.removeItem("feedback-form-state"),y.reset(),console.log("Form data cleaned:",{email:y.email.value,message:y.message.value})}));
//# sourceMappingURL=03-feedback.410843aa.js.map