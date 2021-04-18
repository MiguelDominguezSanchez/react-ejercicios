import { Fragment } from 'react'
import Message from './Message'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'

const SongDetails = ({ search, lyric, bio }) => {
	if (!lyric || !bio) return null
	return (
		<Fragment>
			{lyric.error || lyric.err || 'AbortError' ? (
				<Message
					msg={`Error: no existe la canción '${search.song}'`}
					bgColor='#dc3545'
				/>
			) : (
				<SongLyric />
			)}
			{bio.artists ? (
				<SongArtist />
			) : (
				<Message
					msg={`Error: no existe el  interprete '${search.artist}'`}
					bgColor='#dc3545'
				/>
			)}
		</Fragment>
	)
}

export default SongDetails
