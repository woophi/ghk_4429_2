import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Typography } from '@alfalab/core-components/typography';
import sparkles from '../assets/sparkles.png';
import { appSt } from '../style.css';
import { thxSt } from './style.css';

export const ThxLayout = () => {
  return (
    <>
      <div className={thxSt.container}>
        <img src={sparkles} width={80} height={80} className={thxSt.rocket} />
        <Typography.TitleResponsive font="system" tag="h1" view="small" style={{ margin: '24px 0 12px' }} weight="bold">
          Золотая инвесткопилка недоступна
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" defaultMargins={false}>
          Сообщим, когда можно будет её открыть. Пока можете продолжать пользоваться своей текущей инвесткопилкой
        </Typography.Text>
      </div>
      <div className={appSt.bottomBtn}>
        <ButtonMobile
          href="https://alfa-mobile.alfabank.ru/mobile/goto/invest-details"
          block
          view="secondary"
          onClick={() => window.gtag('event', 'end_4429_var2')}
        >
          Перейти в Инвесткопилку
        </ButtonMobile>
      </div>
    </>
  );
};
