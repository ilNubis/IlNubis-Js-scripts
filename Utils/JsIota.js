// --- Reference Docs ---
// - https://go.dev/wiki/Iota
//
class JsIota{
    static counter = 0;

    static next() {
        return JsIota.counter++;
    }

    static reset() {
        var temp = JsIota.counter;
        JsIota.counter = 0;
        return temp;
    }
 }