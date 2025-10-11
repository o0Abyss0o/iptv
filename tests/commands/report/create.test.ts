import { execSync } from 'child_process'

const ENV_VAR =
  'cross-env DATA_DIR=tests/__data__/input/data STREAMS_DIR=tests/__data__/input/report_create'

describe('report:create', () => {
  it('can create report', () => {
    const cmd = `${ENV_VAR} npm run report:create`
    const stdout = execSync(cmd, { encoding: 'utf8' })
    if (process.env.DEBUG === 'true') console.log(cmd, stdout)

    expect(
      stdout.includes(`
┌─────────┬─────────────┬──────────────────┬─────────────────────────────┬────────────────────────────────────────────────────────────────────────────────────────────────────────┬──────────────────────┐
│ (index) │ issueNumber │ type             │ streamId                    │ streamUrl                                                                                              │ status               │
├─────────┼─────────────┼──────────────────┼─────────────────────────────┼────────────────────────────────────────────────────────────────────────────────────────────────────────┼──────────────────────┤
│ 0       │ 14120       │ 'streams:edit'   │ 'boo.us'                    │ 'https://livestream.telvue.com/templeuni1/f7b44cfafd5c52223d5498196c8a2e7b.sdp/playlist.m3u8'          │ 'invalid_channel_id' │
│ 1       │ 14135       │ 'streams:add'    │ 'BBCWorldNews.uk@SouthAsia' │ 'http://103.199.161.254/Content/bbcworld/Live/Channel%28BBCworld%29/Stream%2801%29/index.m3u8'         │ 'invalid_channel_id' │
│ 2       │ 14177       │ 'streams:add'    │ 'TUTV.us'                   │ 'https://livestream.telvue.com/templeuni1/f7b44cfafd5c52223d5498196c8a2e7b.sdp/playlist.m3u8'          │ 'duplicate_link'     │
│ 3       │ 14178       │ 'streams:add'    │ 'TV3.my'                    │ 'https://live-streams-ssai-01.tonton.com.my/live/2dd2b7cd-1b34-4871-b669-57b5c9beca23/live.isml/.m...' │ 'channel_blocked'    │
│ 4       │ 14179       │ 'streams:add'    │ 'ManoramaNews.in'           │ '(https://mitelefe.com/Api/Videos/GetSourceUrl/694564/0/HLS / https://ssl.cloud.telefe.com/Api/Vid...' │ 'invalid_stream_url' │
│ 5       │ 16120       │ 'streams:remove' │ undefined                   │ 'http://190.61.102.67:2000/play/a038/index.m3u8'                                                       │ 'nonexistent_link'   │
│ 6       │ 19956       │ 'channel search' │ 'CNBCe.tr'                  │ undefined                                                                                              │ 'invalid_channel_id' │
│ 7       │ 19957       │ 'channel search' │ '13thStreet.au'             │ undefined                                                                                              │ 'channel_closed'     │
│ 8       │ 20956       │ 'channel search' │ 'IONTV.us'                  │ undefined                                                                                              │ 'fulfilled'          │
│ 9       │ 25157       │ 'streams:add'    │ 'OnTimeSports.eg@SD'        │ 'OnTime Sports SD.mu38'                                                                                │ 'invalid_stream_url' │
└─────────┴─────────────┴──────────────────┴─────────────────────────────┴────────────────────────────────────────────────────────────────────────────────────────────────────────┴──────────────────────┘`)
    ).toBe(true)
  })
})
