
import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import conditionClass from 'classnames';

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}


export function Lesson(props: LessonProps) {
    const { slug } = useParams()
    const isAvailableAt = isPast(props.availableAt); 
    const availableAtDateFormatted = format(props.availableAt, "EEEE ' • ' d ' de ' MMMM ' de ' yyyy ' • ' k'h'mm ", {
        locale: ptBR
    })

    const isActiveSlugs = slug === props.slug;

    return (
        <Link to={`/lesson/${props.slug}`} className="group">
            <span className="text-gray-300">
                {availableAtDateFormatted}
            </span>
        <div className={
            conditionClass("rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 $", {
                "bg-green-500": isActiveSlugs 
            })
        }>
                <header className="flex items-center justify-between">
                    
                    {isAvailableAt ? (
                        <span className={conditionClass("text-sm ont-medium flex items-center gap-2", {
                            "text-white": isActiveSlugs,
                            "text-blue-500 f": !isActiveSlugs
                        })}>
                            <CheckCircle size={20} /> 
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500  font-medium flex items-center gap-2">
                            <Lock size={20} /> 
                            Em breve
                        </span>
                        )
                    }

                    <span className={conditionClass("text-xs rounded px-2 py-[0.125rem] text-white border ", {
                        'border-white': isActiveSlugs,
                        'border-green-300': !isActiveSlugs
                    })}>
                        {props.type === 'live' ? "AO VIVO" : "AULA PRÁTICA"}
                    </span>
                </header>

                <strong className={conditionClass(" mt-5 block", {
                    'text-white': isActiveSlugs,
                    'text-gray-200': !isActiveSlugs
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}