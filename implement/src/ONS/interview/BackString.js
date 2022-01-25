var backspaceCompare = function (s, t) {
    let s_pointer = s.length - 1;
    let t_pointer = t.length - 1;

    let s_skip = 0;
    let t_skip = 0

    while (s_pointer >= 0 || t_pointer >= 0) {
        console.log('s_pointer', s_pointer);
        while (s_pointer >= 0) {
            if (s.charAt(s_pointer) == '#') {
                s_skip += 1;
                s_pointer -= 1;
            } else if (s_skip > 0) {
                s_pointer -= 1;
                s_skip -= 1;
            } else {
                break;
            }
        }
        while (t_pointer >= 0) {
            if (t.charAt(t_pointer) == '#') {
                t_skip += 1;
                t_pointer -= 1;
            } else if (t_skip > 0) {
                t_pointer -= 1;
                t_skip -= 1;
            } else {
                break;
            }
        }
        if (s_pointer >= 0 && t_pointer >= 0 && s.charAt(s_pointer) != t.charAt(t_pointer)) {
            return false;
        }

        if ((s_pointer >= 0) != (t_pointer >= 0)) {
            return false;
        }

        s_pointer -= 1;
        t_pointer -= 1;
    }
    return true;
};

console.log(backspaceCompare('ab#c', 'ad#c'))