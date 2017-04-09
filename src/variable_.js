class Variable {
    constructor(a, b, c) {
        this.name = a;
        this.value = b;
        this.comment = c;
    }
    getName() {
        return this.name;
    }
    getValue() {
        return this.value;
    }
    getComment() {
        return this.comment;
    }
    getParent() {
        return this.parent;
    }
    setName(name) {
        this.name = name;
    }
    setValue(value) {
        this.value = value;
    }
    setComment(comment) {
        this.comment = comment;
    }
    setParent(parent) {
        if (parent != this.parent) {
            this.parent = parent;
            if (parent != null) {
                parent.getVariableList().push(this);
            }
        }
    }

    //var obj = new Class_("test","test");
}