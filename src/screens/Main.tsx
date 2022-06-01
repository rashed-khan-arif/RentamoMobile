import React, { useCallback, useState } from 'react';

import { useData, useTheme, useTranslation } from '../hooks/';
import { Block, Button, Image, Input, Product, Text } from '../components/';
import BottomTabNavigation from '../navigation/TabNavigation';

const Main = () => {
    const { t } = useTranslation();
    return (
        <Block>
            <BottomTabNavigation />
        </Block>
    );
};

export default Main;
