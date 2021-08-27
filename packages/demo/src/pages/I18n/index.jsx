import * as React from "react";
import Page from "../../components/Page";

import { Select , Stack} from "@chakra-ui/react"

import { IntlProvider, FormattedMessage, FormattedNumber } from 'react-intl';

import {
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
} from 'recoil';

function loadLocaleData(locale) {
    switch (locale) {
        case 'zh':
            return import('../../../compiled-lang/zh.json')
        default:
            return import('../../../compiled-lang/en.json')
    }
}

export default function I18n({ locale }) {
    const introduction = `Internationalization and localization is supported by formatjs aka. react-intl`;

    const localState = atom({
        key: 'i18nLocaleState',
        default: locale,
    });

    const messageState = atom({
        key: 'i18nMessageState',
        default: {},
    });

    const currencyState = selector({
        key: 'i18nCurrentyState',
        get: ({ get }) => {
            const locale = get(localState);
            switch (locale) {
                case 'zh':
                    return '¥';
                default:
                    return '£';
            }
        },
    });

    function SelectLocale() {
        const [selectedLocale, setLocale] = useRecoilState(localState);
        const [message, setMessage] = useRecoilState(messageState);

        const onChange = async function (event) {
            setLocale(event.target.value);
            const messages = await loadLocaleData(event.target.value);
            setMessage(messages);
        }

        return (<Select placeholder="Select Locale" onChange={onChange} size="sm" width="200px">
            <option value="zh">中文</option>
            <option value="en">English</option>
        </Select>);
    }

    function Messages() {
        const locale = useRecoilValue(localState);
        const messages = useRecoilValue(messageState);
        const currency = useRecoilValue(currencyState);

        return (<IntlProvider messages={messages} locale={locale} defaultLocale="en">
            <p>
                <FormattedMessage
                    id="uBezLx"
                    values={{ ts: Date.now() }}
                />
                <br />
                <FormattedNumber value={`19 ${currency}`} style="currency" />
            </p>
        </IntlProvider>);
    }

    return (
        <Page introduction={introduction}>
            <Stack spacing={3}>
                <SelectLocale />
                <Messages />
            </Stack>

        </Page>
    )
}