index.html-line 7: BUG FIXED -> Link to CSS file dose not match actual file name, changed it from (styles/missing-file.css) to (style.css).
index.html-line 24: not a bug but is confusing to name an input as output, changed name to input to help ovoid confusion and potential bugs.
index.html-line 28: BUG FIXED -> Missing div closing tag, added a </div>.
index.html-line 34: BUG FIXED -> style was missing "" and had : instead of =, changed from (style: color: red;) to (style="color: red;").
index.html-line 39: BUG FIXED -> div tag class was not spelled correct, was (clss="") changed to (class="").
index.html-line 46: BUG FIXED -> img sorce must be https to avoid mixed content issues.
index.html-line 52: BUG FIXED -> missing src for index.js.

style.css-line 2: BUG FIXED -> larger was spelled wrong (largeer) to (larger).
style.css-line 7: BUG FIXED -> font-size misspelled was (fontsize) missing the - between them.
style.css-line 13: BUG FIXED -> Spelling error did not match the name on index.html, was (contianer) changed to (container).
style.css-line 14: BUG FIXED -> color misspelled, was (colro) instead of (color).
style.css-line 19: BUG FIXED -> background set to invalid color (#f3SupeCoolColor) changed to mach #output (#f0f0f0).
style.css-line 29: BUG FIXED -> padding misspelled was (pudding).

index.js-line 2: BUG FIXED -> console.log was missing ) at the end.
index.js-line 5: BUG FIXED -> (myVariable) not declared or used in this program so just commented it out.
index.js-line 10: BUG FIXED -> trying to call greeting as though it is a function, changed to console.log to print string into the console.
index.js-line 18: BUG FIXED -> let obj; was undefined and had no property. Also when using objects it is best to use const to protect the object from being changed.
index.js-line 28: BUG FIXED -> Changed + to , to be able to console.log the propertys inside of the user object.
index.js-line 36: BUG FIXED -> let num = "10"; makes num a string instead of an int. Got rid of the quotation around 10 to declare num as a int.
