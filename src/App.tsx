import { Button } from '@alfalab/core-components/button';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import gold from './assets/gold.png';
import rub from './assets/rub.png';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = (withThx = true) => {
    if (withThx) {
      window.gtag('event', 'activate_gold_4429_var2');
    } else {
      window.gtag('event', 'activate_fin_4429_var2');
    }
    setLoading(true);

    LS.setItem(LSKeys.ShowThx, true);
    if (withThx) {
      setThx(true);
    }
    setLoading(false);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="large" font="system" weight="semibold">
          Управляйте финансами с умом
        </Typography.TitleResponsive>

        <Typography.Text view="primary-medium">Рассмотрите новую стратегию накоплений вместо текущей</Typography.Text>

        <div className={appSt.box({ color: 'gold' })}>
          <div className={appSt.row}>
            <div>
              <Typography.TitleResponsive tag="h2" view="small" font="system" weight="semibold">
                Золотая копилка
              </Typography.TitleResponsive>
              <Typography.Text view="primary-small">
                Инвестиции в реальное золото на обезличенных металлических счетах (ОМС)
              </Typography.Text>
            </div>
            <img src={gold} width={90} height={90} />
          </div>

          <div>
            <Typography.Text view="secondary-medium" tag="p" defaultMargins={false}>
              Подойдет
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="bold" tag="p" defaultMargins={false}>
              Для долгосрочных накоплений
            </Typography.Text>
          </div>

          <div className={appSt.goldenBoxInner}>
            <CDNIcon name="glyph_bulb-flash-compact_m" />

            <Typography.Text view="component-secondary">
              Спрос на золото остается высоким в кризисные времена
            </Typography.Text>
          </div>

          <Button
            block
            size={40}
            view="primary"
            onClick={() => submit(true)}
            loading={loading}
            leftAddons={<CDNIcon name="glyph_arrows-cw-circle_s" />}
          >
            Заменить копилку
          </Button>
        </div>

        <div className={appSt.box({ color: 'green' })}>
          <div className={appSt.label}>
            <Typography.Text view="caps" weight="bold">
              Подключена
            </Typography.Text>
          </div>
          <div className={appSt.row}>
            <div>
              <Typography.TitleResponsive tag="h2" view="small" font="system" weight="semibold">
                Инвесткопилка
              </Typography.TitleResponsive>
              <Typography.Text view="primary-small">Краткосрочные инвестиции в финансовые инструменты</Typography.Text>
            </div>
            <img src={rub} width={90} height={90} />
          </div>

          <div>
            <Typography.Text view="secondary-medium" tag="p" defaultMargins={false}>
              Подойдет
            </Typography.Text>
            <Typography.Text view="primary-medium" weight="bold" tag="p" defaultMargins={false}>
              Для быстрых накоплений
            </Typography.Text>
          </div>

          <Button block size={40} view="primary" disabled>
            Подключена сейчас
          </Button>
        </div>

        <Button
          style={{ marginTop: '1rem' }}
          block
          view="secondary"
          href="https://alfa-mobile.alfabank.ru/mobile/goto/invest-details"
          onClick={() => submit()}
        >
          Не интересно
        </Button>
      </div>
    </>
  );
};
