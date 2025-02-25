import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const goldenBoxInner = style({
  display: 'flex',
  padding: '12px',
  gap: '8px',
  borderRadius: '1rem',
  backgroundColor: '#FFFFFFCC',
});

const row = style({
  display: 'flex',
  gap: '10px',
  justifyContent: 'space-between',
});

const box = recipe({
  base: {
    display: 'flex',
    padding: '1rem 1rem 20px',
    flexDirection: 'column',
    gap: '20px',
    borderRadius: '1rem',
  },
  variants: {
    color: {
      gold: {
        marginTop: '8px',
        backgroundColor: '#FFF0E3',
      },
      green: {
        backgroundColor: '#E1F0DE',
        marginTop: '36px',
        position: 'relative',
      },
    },
  },
});

const label = style({
  height: '47px',
  backgroundColor: '#7FBF73',
  padding: '8px 16px 23px 16px',
  borderTopLeftRadius: '12px',
  borderTopRightRadius: '12px',
  left: 0,
  top: -32,
  position: 'absolute',
  zIndex: -1,
});

export const appSt = {
  bottomBtn,
  container,
  box,
  row,
  goldenBoxInner,
  label,
};
