; for something completely different, here is
; LispyScript http://lispyscript.com/ implementation
(var numbers (array 3 1 7))
(var constant 2)
(var mul (function (a b) (* a b)))
; partial application
(var byConstant (
  Function.prototype.bind.call mul null constant))
(var process (function (x) (
  console.log (byConstant x))))
; iteration over an array
(each numbers process)
; 6
; 2
; 14
; see the generated JavaScript file with same name
; in this folder
