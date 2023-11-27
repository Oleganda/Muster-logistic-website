import { Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import Header from './Header';

export default function UserInput({ onChange, userInput }) {


    const location = useLocation();

    const isCalcualor = location.pathname === '/about-us' || location.pathname === '/download';

    if (isCalcualor) {
        return null;
    }

    return (
        <Container>
            <Header title='Calculate your Order' />
            <section id="user-input">
                <div className="input-group">
                    <p>
                        <label htmlFor="containerQuantity">Containers Quantity</label>
                        <input
                            type="number"
                            id="containerQuantity"
                            required
                            value={userInput.containerQuantity}
                            onChange={(event) => onChange('containerQuantity', event.target.value)}
                        />
                    </p>
                    <p>
                        <label htmlFor="grossWeight">Gross weight, kg</label>
                        <input
                            type="number"
                            id="grossWeight"
                            required
                            value={userInput.grossWeight}
                            onChange={(event) => onChange('grossWeight', event.target.value)}
                        />
                    </p>
                </div>
                {/* <div>
                <p>
                    <label htmlFor="from">FROM</label>
                    <p> Austria</p>
                </p>
                <p>
                    <label>TO
                        <label>
                            <input
                                type="radio"
                                name="myRadio"
                                value="Austria"
                                checked={userInput.to === 'Austria'}
                                onChange={() => onChange('to', 'Austria')}
                            />
                            Hungary
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="myRadio"
                                value="Germany"
                                checked={userInput.to === 'Germany'}
                                onChange={() => onChange('to', 'Germany')}
                            />
                            Germany
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="myRadio"
                                value="Spain"
                                checked={userInput.to === 'Spain'}
                                onChange={() => onChange('to', 'Spain')}
                            />
                            Spain
                        </label>
                    </label>
                </p>
            </div> */}
            </section>
        </Container>

    );
}
