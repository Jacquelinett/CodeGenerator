class Function {
    constructor(x, y) {
        this.name = x;
        this.comment = y;
    }
    getName() {
        return this.name;
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
    setComment(comment) {
        this.comment = comment;
    }
    setParent(parent) {
        if (parent != this.parent) {
            this.parent = parent;
            if (parent != null) {
                parent.getFunctionList().push(this);
            }
        }
    }

    //var obj = new function_("test","test");
}