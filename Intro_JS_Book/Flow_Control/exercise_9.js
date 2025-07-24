/*
console.log(false ?? null); ==> false, nullish coalescing operator evaluates right-hand operand if the left-hand one is nullish (null or undefined) 
                                otherwise it evaluates to the value of the left-hand operand

console.log(true ?? (1 + 2)); ==> true, neither of the operands are nullish (null/undefined),
                                  retunrs left-hand operand

console.log((1 + 2) ?? true); ==> 3, neither of the operands are nullish (null/undefined),
                                  retunrs left-hand operand

console.log(null ?? false); ==> false, left-hand operand is nullish (null/undefined), 
                                hence it returns right hand operand

console.log(undefined ?? (1 + 2)); ==> 3, left-hand operand is nullish (null/undefined), 
                                hence it returns right hand operand

console.log((1 + 2) ?? null); ==> null, left-hand operand is not nullish (null/undefined), 
                                hence it returns right hand operand

                               xx ==> wrong if left-hand is not nullish it return left hand

console.log(null ?? undefined);  ==> undefined, left-hand operand is nullish (null/undefined), 
                                hence it returns right hand operand

console.log(undefined ?? null);  ==> null, left-hand operand is nullish (null/undefined), 
                                hence it returns right hand operand

*/