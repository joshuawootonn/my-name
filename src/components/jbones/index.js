import React, { useEffect, useRef, useState } from 'react';

import { css } from 'styled-components/macro';

const styles = {
    frame: css`
        height: 100vh;
        width: 100vw;
    `,
};

const Jbones = () => (
    <iframe
        css={styles.frame}
        src={'file://fluoridated-thoracic-bone.glitch.me/'}
    />
);

export default Jbones;
