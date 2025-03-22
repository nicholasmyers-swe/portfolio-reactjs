export const loremIpsum = (version: number) => {
    const text1: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const text2: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non dignissim sem. Aenean fringilla libero interdum ligula gravida, id rutrum est ullamcorper. Curabitur placerat lectus at faucibus suscipit. Cras dapibus interdum purus, nec faucibus tellus hendrerit ac. Nullam non nulla in massa consectetur venenatis auctor non magna. Fusce consectetur lacus a orci ultrices commodo. Curabitur tempor lectus eget odio dictum blandit. Nam sit amet lacus eu enim congue feugiat non eget enim. Proin convallis aliquet dolor ac dignissim. Nulla facilisi. Vivamus quis mattis sapien."
    const text3: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sollicitudin a nunc eu rhoncus. Maecenas a placerat nulla, ac accumsan eros. Nulla at nulla sit amet velit placerat finibus ut in est. Aliquam consequat nisi ultrices, tristique ante in, interdum arcu. Donec aliquet maximus orci a tincidunt. Cras vitae egestas leo. Morbi iaculis ex enim, in mollis lorem dapibus eu. Nam porttitor gravida arcu, vel elementum massa tincidunt at. Vivamus condimentum tincidunt dictum. Cras vitae iaculis massa, vel interdum lacus. Nunc posuere lacinia eros. Sed semper diam mi, ut ultricies sem imperdiet sit amet. Phasellus nunc mauris, imperdiet nec elementum in, tempor quis orci.\nVestibulum vitae consectetur nisl, facilisis efficitur dolor. Sed interdum, ligula non sodales aliquet, urna risus elementum mauris, condimentum malesuada orci risus ut sapien. Proin posuere viverra faucibus. Donec porttitor porttitor nisi, eu scelerisque tortor bibendum eu. Duis mauris neque, pretium porttitor fermentum eget, dignissim sit amet tortor. Fusce sapien nunc, rutrum eget pretium vel, dapibus eget sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam eu velit ut risus luctus varius. In fermentum nulla ac scelerisque lacinia. Nulla pulvinar quam ac ante convallis, sit amet elementum lectus molestie. Aenean mi tellus, porta sit amet congue ut, ultrices sit amet risus. Pellentesque eu quam quam. Vestibulum egestas fermentum nulla, sed scelerisque eros maximus vitae.";

    switch (version) {
        case 1:
            return text1;
        case 2:
            return text2;
        case 3:
            return text3;
        default:
            return text1
    }
}