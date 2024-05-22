
import React, {useState} from 'react';
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title';
import career from '../../../styles/scss/sections/index/career.module.scss';
import qna from '../../../../src/content/index/qna.json';

interface QnAItem {
    question: string;
    answer: string;
    isOpen: boolean;
}

const QnA: React.FC = () => {
    const [qnas, setQnas] = useState<QnAItem[]>(qna);
    console.log(qnas);
    

    const toggleAnswer = (index: number) => {
        setQnas((prevState) => {
            const updatedQnas = prevState.map((qna, i) => {
                if (i === index) {
                    return { ...qna, isOpen: !qna.isOpen }; // Actualiza solo el isOpen de la pregunta actual
                } else {
                    return qna; // Mantén las otras preguntas sin cambios
                }
            });
            return updatedQnas;
        });
    };

    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle title="DUDAS Y PREGUNTAS" preTitle="" subTitle="Aquí encontrarás respuestas a las preguntas más comunes." />

                <div className={career.area}>
                    {qnas.map((qna, index) => (
                        <div key={index} className={career.company}>
                            <div
                                className={career.companyContent}
                                style={{ cursor: 'pointer', fontWeight: 'bold' }}
                                onClick={() => toggleAnswer(index)}
                            >
                                {qna.question}
                            </div>
                            {qna.isOpen && <div className={career.companyContent}>{qna.answer}</div>}
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default QnA;
