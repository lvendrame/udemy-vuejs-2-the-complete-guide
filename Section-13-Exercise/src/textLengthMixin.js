export const textLengthMixin = {
    computed: {
        textLength() {
            return [this.text, ' ', '(', this.text.length, ')'].join('');
        }
    }
};