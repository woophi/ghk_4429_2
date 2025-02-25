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
          Сообщим, когда можно будет её открыть. Пока можно открыть финансовую инвесткопилку
        </Typography.Text>
      </div>
      <div className={appSt.bottomBtn}>
        <ButtonMobile
          href="alfabank://investments/open_investments_account?type=INVESTBOX"
          block
          view="secondary"
          onClick={() => window.gtag('event', 'end_4428_var2')}
        >
          Открыть Финансовую копилку
        </ButtonMobile>
      </div>
    </>
  );
};
