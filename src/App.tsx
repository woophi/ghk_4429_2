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
          Выберите свою инвесткопилку
        </Typography.TitleResponsive>

        <Typography.Text view="primary-medium">
          Откладывайте деньги в копилку и получайте доход от инвестиций
        </Typography.Text>

        <div className={appSt.box({ color: 'gold' })}>
          <div className={appSt.row}>
            <div>
              <Typography.TitleResponsive tag="h2" view="small" font="system" weight="semibold">
                Золотая
              </Typography.TitleResponsive>
              <Typography.Text view="primary-small">
                Инвестиции в золото без забот о хранении — через обезличенные металлические счета (ОМС)
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
              Золото сохраняет ценность даже при экономических кризисах
            </Typography.Text>
          </div>

          <Button block size={40} view="primary" onClick={() => submit(true)} loading={loading}>
            Выбрать
          </Button>
        </div>

        <div className={appSt.box({ color: 'green' })}>
          <div className={appSt.row}>
            <div>
              <Typography.TitleResponsive tag="h2" view="small" font="system" weight="semibold">
                Финансовая
              </Typography.TitleResponsive>
              <Typography.Text view="primary-small">
                Инвестиции в финансовые инструменты для динамичного роста
              </Typography.Text>
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

          <Button
            block
            size={40}
            view="primary"
            href="alfabank://investments/open_investments_account?type=INVESTBOX"
            disabled={loading}
            onClick={() => submit()}
          >
            Выбрать
          </Button>
        </div>
      </div>
    </>
  );
};
