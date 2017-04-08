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
    setName(name) {
        this.name = name;
    }
    setValue(value) {
        this.value = value;
    }
    setComment(comment) {
        this.comment = comment;
    }

    //var obj = new Class_("test","test");
}