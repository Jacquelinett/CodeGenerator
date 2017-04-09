function dragMoveListener(event) {
    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
        'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

window.dragMoveListener = dragMoveListener;

interact('.Class')
    .preventDefault(['auto'])
    .draggable({
        onmove: window.dragMoveListener
    })
    .resizable({
        preserveAspectRatio: false,
        edges: {
            left: true,
            right: true,
            bottom: true,
            top: true
        }
    })
    .on('resizemove', function (event) {
        var target = event.target,
            x = (parseFloat(target.getAttribute('data-x')) || 0),
            y = (parseFloat(target.getAttribute('data-y')) || 0);

        // update the element's style
        target.style.width = event.rect.width + 'px';
        target.style.height = event.rect.height + 'px';

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
            'translate(' + x + 'px,' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
        //target.textContent = Math.round(event.rect.width) + '×' + Math.round(event.rect.height);
    })
    .dropzone({
        // only accept elements matching this CSS selector
        accept: '.dropable',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.75,

        // listen for drop related events:

        ondropactivate: function (event) {
            // add active dropzone feedback
            event.target.classList.add('drop-active');
        },
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget,
                dropzoneElement = event.target;

            // feedback the possibility of a drop
            dropzoneElement.classList.add('drop-target');
            draggableElement.classList.add('can-drop');
            //draggableElement.textContent = 'Dragged in';
        },
        ondragleave: function (event) {
            // remove the drop feedback style
            event.target.classList.remove('drop-target');
            event.target.classList.remove('can-drop');
            //event.relatedTarget.textContent = 'Dragged out';

            var tagIndex = event.relatedTarget.id.replace( /^\D+/g, '');;
            var tag;
            if (event.relatedTarget.id.indexOf("function") > -1)
                tag = functionList[tagIndex];
            else if (event.relatedTarget.id.indexOf("variable") > -1)
                tag = variableList[tagIndex];

            if (tag.getParent() != null) {
                console.log(tag.getParent());
                tag.getParent().removeFromClass(tag);
                tag.setParent(null);
            }
        },
        ondrop: function (event) {
            //event.relatedTarget.textContent = 'Dropped';
            var tagIndex = event.relatedTarget.id.replace( /^\D+/g, '');;
            var tag;
            if (event.relatedTarget.id.indexOf("function") > -1)
                tag = functionList[tagIndex];
            else if (event.relatedTarget.id.indexOf("variable") > -1)
                tag = variableList[tagIndex];

            console.log(tag);
            tag.setParent(classList[event.target.id.replace( /^\D+/g, '')]);
            //console.log(event.relatedTarget.tag);
        },
        ondropdeactivate: function (event) {
            // remove active dropzone feedback
            event.target.classList.remove('drop-active');
            event.target.classList.remove('drop-target');
        }
    })
    .on('doubletap', function (event) {
        if (event.target.tagName.toLowerCase() == 'span')
            updateName(event.target.id);
    });

interact('.Function')
    .preventDefault(['auto'])
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: {
                top: 0,
                left: 0,
                bottom: 1,
                right: 1
            }
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
            //var textEl = event.target.querySelector('p');

            /*textEl && (textEl.textContent =
                'moved a distance of ' +
                (Math.sqrt(event.dx * event.dx +
                    event.dy * event.dy) | 0) + 'px');*/
        }

    })
    .on('doubletap', function (event) {
        if (event.target.tagName.toLowerCase() == 'span')
            updateName(event.target.id);
    });

interact('.Variable')
    .preventDefault(['auto'])
    .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        restrict: {
            restriction: "parent",
            endOnly: true,
            elementRect: {
                top: 0,
                left: 0,
                bottom: 1,
                right: 1
            }
        },
        // enable autoScroll
        autoScroll: true,

        // call this function on every dragmove event
        onmove: dragMoveListener,
        // call this function on every dragend event
        onend: function (event) {
            /*var textEl = event.target.querySelector('p');

            textEl && (textEl.textContent =
                'moved a distance of ' +
                (Math.sqrt(event.dx * event.dx +
                    event.dy * event.dy) | 0) + 'px');*/
        }
    })
    .on('doubletap', function (event) {
        if (event.target.tagName.toLowerCase() == 'span')
            updateName(event.target.id);
    });