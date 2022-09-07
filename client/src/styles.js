import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    background: 'rgb(2,0,36)',
    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.15199583251269255) 35%, rgba(0,212,255,1) 100%)',
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
}));
