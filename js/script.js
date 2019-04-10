(function ($) {
    $.fn.addPElement = function (options) {
        let myNewElement = $.extend({
            element: "p",
            text: "It is New P Element",
            fontSize: 20
        }, options);

        let newElement = $("<"+myNewElement.element+"></"+myNewElement.element+">");
        newElement.text(myNewElement.text);
        newElement.css("font-size", myNewElement.fontSize);
        this.append(newElement);

        return this;
    }
}(jQuery));