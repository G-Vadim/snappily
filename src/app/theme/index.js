import { extendTheme } from '@chakra-ui/react';

import { colors } from './colors';
import { fonts } from './fonts';
import { fontSizes } from './font-sizes';
import { lineHeights } from './line-heights';
import { radii } from './radius';
import { styles } from './globalStyles';
import { breakpoints } from './breakpoints';

export const theme = extendTheme({ colors, fonts, fontSizes, lineHeights, radii, styles, breakpoints });
