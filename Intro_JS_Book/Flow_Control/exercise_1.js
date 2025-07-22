/* What values do the following expressions evaluate to?

false || (true && false); ==> false
true || (1 + 2); ==> true
(1 + 2) || true; ==> true x wrong ans is 3 --- remember short-circuit !!!
true && (1 + 2); ==> true x wrong ans is 3 --- remember it outputs last evaluated value !!!
false && (1 + 2); ==> false
(1 + 2) && true; ==> true
(32 * 4) >= 129; ==> false
false !== !true; ==> false
true === 4; ==> true x wrong ans is false --- === stict equality checks both type AND value !!!
false === (847 === '847'); ==> false x wrong ans is true --- false = false which is true
false === (847 == '847'); ==> false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; ==> false x wrong ans is true --- in || when one is true outcome is true

*/