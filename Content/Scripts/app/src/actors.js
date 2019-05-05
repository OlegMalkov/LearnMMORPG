// @flow strict
import { createUpdater, storeCreatedEvent, createEpicWithScope, makeCommand } from './epicsFlow'
import { createTextActorEC, updateTextActorEC } from './actorsEM'

type TextActorStateType = {|
    text: string,
|}

const SetTextCommand = makeCommand<{| text: string |}>('TEXT_ACTOR_SET_TEXT')
global.SetTextCommand = SetTextCommand
const createTextActorEpic = ({
	vcet,
	text,
}: {| vcet: string, text: string |}) => {
	return createEpicWithScope<TextActorStateType, *, *, *>({
		vcet,
		initialState: {
			text,
		},
		initialScope: {
			actor: TextRenderActor,
		},
		updaters: {
			init: createUpdater({
				given: {},
				when: { _: storeCreatedEvent.condition },
				then: ({ R }) => {
					return R.sideEffect(createTextActorEC({ actorId: vcet, text }))
				},
			}),
			setText: createUpdater({
				given: {},
				when: { text: SetTextCommand.condition.wsk('text') },
				then: ({ R, values: { text } }) => {
					return R.sideEffect(updateTextActorEC({ actorId: vcet, text }))
				},
			}),
		},
	})
}

export {
	createTextActorEpic,
}
