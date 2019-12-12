    /**
     * get caret status of the selection of the element
     *
     * @param   {Element}   element         target DOM element
     * @return  {Object}    return
     * @return  {String}    return.text     selected text
     * @return  {Number}    return.start    start position of the selection
     * @return  {Number}    return.end      end position of the selection
     */
    var getCaretInfo = function(element){
      var res = {
          text: '',
          start: 0,
          end: 0
      };

      if (!element.innerText) {
          /* no value or empty string */
          return res;
      }

      try {
          if (window.getSelection) {
              /* except IE */
              res.start = element.selectionStart;
              res.end = element.selectionEnd;
              res.text = element.innerText.slice(res.start, res.end);
          } else if (doc.selection) {
              /* for IE */
              element.focus();

              var range = doc.selection.createRange(),
                  range2 = doc.body.createTextRange();

              res.text = range.text;

              try {
                  range2.moveToElementText(element);
                  range2.setEndPoint('StartToStart', range);
              } catch (e) {
                  range2 = element.createTextRange();
                  range2.setEndPoint('StartToStart', range);
              }

              res.start = element.innerText.length - range2.text.length;
              res.end = res.start + range.text.length;
          }
      } catch (e) {
          /* give up */
      }

      return res;
  };