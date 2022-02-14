class MyArray extends Array{
    first()
    {
        return this[0];
    }
    last()
    {
        return this[this.length-1];
    }
    random()
    {
        let randomIndex = Math.floor(Math.random() * this.length);
        return this[randomIndex];
    }
}
