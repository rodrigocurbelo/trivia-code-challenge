import React from 'react'
import Svg, { G, Path, Defs } from 'react-native-svg'
import { Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width

export default function RobotMenuSvg() {
  return (
    <Svg
      style={{ height: windowWidth - 100, width: windowWidth }}
      viewBox="0 0 329 334"
      fill="none"
    >
      <G>
        <Path
          d="M153.136 117.332l7.387-8.512-11.932-9.08 4.545-11.349"
          stroke="#007B95"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M116.933 178.402h-15.172c-6.033 0-10.969-4.931-10.969-10.957 0-6.026 4.936-10.957 10.969-10.957h15.172c6.034 0 10.97 4.931 10.97 10.957 0 6.026-4.936 10.957-10.97 10.957z"
          fill="#2E425A"
        />
        <Path
          d="M176.253 199.11c-2.29-6.192-10.977-9.847-19.403-8.164-8.427 1.683-13.401 8.066-11.111 14.258l11.553 31.236c2.29 6.192 3.06 7.966 13.458 7.966h14.911c5.431 0 7.099-3.505 2.145-14.06l-11.553-31.236z"
          fill="#2E425A"
        />
        <Path
          d="M163.257 228.601c26.009 0 47.29-21.254 47.29-47.231v-25.493c0-25.977-21.281-47.231-47.29-47.231h-4.545c-26.011 0-47.291 21.254-47.291 47.231v25.493c0 25.977 21.28 47.231 47.291 47.231h4.545z"
          fill="#007B95"
        />
        <Path
          d="M161.007 229.125c25.046 0 45.538-21.317 45.538-47.369v-25.567c0-26.053-20.492-47.369-45.538-47.369h-4.377c-25.047 0-45.539 21.316-45.539 47.369v25.567c0 26.052 20.492 47.369 45.539 47.369h4.377z"
          fill="#1AB2D2"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M221.711 176.057h-14.719v-21.914h14.719c6.035 0 10.971 4.932 10.971 10.957 0 6.027-4.936 10.957-10.971 10.957z"
          fill="#2E425A"
        />
        <Path
          d="M165.375 79.747c0-6.509-5.283-11.785-11.801-11.785-6.517 0-11.801 5.276-11.801 11.785 0 6.51 5.284 11.787 11.801 11.787 6.518 0 11.801-5.278 11.801-11.787z"
          fill="#1AB2D2"
        />
        <Path
          d="M124.727 144.571l.919-.663a17 17 0 0119.015-.591l1.089.686M158.818 144.571l.919-.663a17 17 0 0119.015-.591l1.089.686M172.454 190.536v0a31.099 31.099 0 01-35.02 1.093l-.207-.132"
          stroke="#19141E"
          strokeWidth={5}
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M134.954 177.484c6.276 0 11.364-5.081 11.364-11.349s-5.088-11.35-11.364-11.35c-6.275 0-11.363 5.082-11.363 11.35s5.088 11.349 11.363 11.349zm0-2.269a4.543 4.543 0 004.546-4.54 4.542 4.542 0 00-4.546-4.54 4.542 4.542 0 00-4.545 4.54 4.543 4.543 0 004.545 4.54zM171.318 177.484c6.276 0 11.364-5.081 11.364-11.349s-5.088-11.35-11.364-11.35c-6.276 0-11.364 5.082-11.364 11.35s5.088 11.349 11.364 11.349zm0-2.269a4.543 4.543 0 004.546-4.54 4.542 4.542 0 00-4.546-4.54 4.542 4.542 0 00-4.545 4.54 4.543 4.543 0 004.545 4.54z"
          fill="#19141E"
        />
        <G>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M176.818 3a5.5 5.5 0 00-5.5 5.5v62.772a5.5 5.5 0 005.5 5.5h23.478v18.564l26.24-18.564h92.691a5.5 5.5 0 005.5-5.5V8.5a5.5 5.5 0 00-5.5-5.5H176.818z"
            fill="#fff"
          />
        </G>
        <Path
          d="M197.154 36h-1.891v-9.133l-2.789.953V26.22l4.437-1.633h.243V36zm11.367-4.79c0 1.636-.308 2.87-.922 3.704-.61.828-1.539 1.242-2.789 1.242-1.229 0-2.156-.403-2.781-1.21-.62-.813-.938-2.014-.954-3.602v-1.969c0-1.635.305-2.862.914-3.68.615-.817 1.55-1.226 2.805-1.226 1.245 0 2.172.398 2.781 1.195.615.797.93 1.99.946 3.578v1.969zm-1.899-2.124c0-1.068-.146-1.849-.437-2.344-.292-.5-.755-.75-1.391-.75-.62 0-1.075.237-1.367.711-.292.469-.445 1.203-.461 2.203v2.578c0 1.063.148 1.855.445 2.375.297.521.763.782 1.399.782.609 0 1.06-.24 1.351-.72.292-.483.446-1.239.461-2.265v-2.57zm15.617-2.867h-3.546V36h-1.961v-9.781h-3.516v-1.594h9.023v1.594zm5.227 3.062a4.705 4.705 0 00-.773-.062c-.87 0-1.456.333-1.758 1V36h-1.899v-8.453h1.813l.047.945c.458-.734 1.093-1.101 1.906-1.101.271 0 .495.036.672.109l-.008 1.781zm6.32 5.89c-.557.657-1.349.985-2.375.985-.916 0-1.612-.268-2.086-.804-.468-.537-.703-1.313-.703-2.329v-5.476h1.899V33c0 1.073.445 1.61 1.336 1.61.922 0 1.544-.331 1.867-.993v-6.07h1.898V36h-1.789l-.047-.828zm7.493.985c-1.204 0-2.18-.377-2.93-1.133-.745-.76-1.117-1.77-1.117-3.03v-.235c0-.844.161-1.596.484-2.258.328-.667.786-1.185 1.375-1.555a3.627 3.627 0 011.969-.554c1.151 0 2.039.367 2.664 1.101.63.735.945 1.774.945 3.117v.766h-5.523c.057.698.289 1.25.695 1.656.411.407.927.61 1.547.61.87 0 1.578-.352 2.125-1.055l1.023.977a3.435 3.435 0 01-1.359 1.18c-.563.275-1.195.413-1.898.413zm-.227-7.242c-.521 0-.943.182-1.266.547-.317.365-.521.872-.609 1.523h3.617v-.14c-.042-.636-.211-1.115-.508-1.438-.297-.328-.708-.492-1.234-.492zm8.727 2.781c0-.828.164-1.573.492-2.234.328-.667.789-1.177 1.383-1.531.593-.36 1.276-.54 2.046-.54 1.141 0 2.065.368 2.774 1.102.713.735 1.099 1.709 1.156 2.922l.008.445c0 .834-.162 1.578-.484 2.235a3.527 3.527 0 01-1.375 1.523c-.594.36-1.282.54-2.063.54-1.193 0-2.148-.397-2.867-1.188-.714-.797-1.07-1.857-1.07-3.18v-.094zm1.898.164c0 .87.18 1.552.539 2.047.359.49.859.735 1.5.735s1.138-.25 1.492-.75c.36-.5.539-1.232.539-2.196 0-.854-.185-1.53-.554-2.03-.365-.5-.862-.75-1.493-.75-.619 0-1.112.247-1.476.741-.365.49-.547 1.224-.547 2.203zm11.992-2.578a4.705 4.705 0 00-.773-.062c-.87 0-1.456.333-1.758 1V36h-1.899v-8.453h1.813l.047.945c.458-.734 1.094-1.101 1.906-1.101.271 0 .495.036.672.109l-.008 1.781zm11.922 1.899h-4.578V36h-1.977V24.625h7.227v1.594h-5.25v3.383h4.578v1.578zm6.844 4.82c-.084-.161-.156-.425-.219-.79a2.955 2.955 0 01-2.219.946c-.849 0-1.541-.242-2.078-.726-.536-.485-.805-1.084-.805-1.797 0-.901.334-1.591 1-2.07.672-.485 1.631-.727 2.875-.727h1.165v-.555c0-.437-.123-.786-.368-1.047-.244-.265-.617-.398-1.117-.398-.432 0-.786.11-1.062.328a.993.993 0 00-.414.82h-1.899c0-.463.154-.896.461-1.297.307-.406.724-.724 1.25-.953a4.43 4.43 0 011.774-.343c.989 0 1.778.25 2.367.75.588.494.89 1.192.906 2.093v3.813c0 .76.107 1.367.32 1.82V36h-1.937zm-2.086-1.367c.375 0 .726-.091 1.055-.274.333-.182.583-.427.75-.734v-1.594h-1.024c-.703 0-1.232.123-1.586.367-.354.245-.531.592-.531 1.04 0 .364.12.656.359.874.245.214.571.32.977.32zM288.06 36h-1.899V24h1.899v12zm6.812-2.297a.857.857 0 00-.422-.773c-.276-.177-.737-.334-1.382-.47-.646-.135-1.185-.306-1.618-.515-.948-.458-1.421-1.122-1.421-1.992 0-.729.307-1.338.921-1.828.615-.49 1.396-.734 2.344-.734 1.011 0 1.826.25 2.445.75.625.5.938 1.148.938 1.945h-1.898c0-.365-.136-.667-.407-.906-.271-.245-.63-.367-1.078-.367-.417 0-.758.096-1.023.289a.913.913 0 00-.391.773c0 .292.122.518.367.68.245.161.74.325 1.485.492.744.161 1.328.357 1.75.586.427.224.742.495.945.812.208.318.312.703.312 1.157 0 .76-.315 1.377-.945 1.851-.63.469-1.456.703-2.476.703-.693 0-1.31-.125-1.852-.375s-.964-.593-1.266-1.031a2.442 2.442 0 01-.453-1.414h1.844c.026.448.195.794.508 1.039.312.24.726.36 1.242.36.5 0 .88-.094 1.141-.282a.893.893 0 00.39-.75zm7.25 2.453c-1.203 0-2.179-.377-2.929-1.133-.745-.76-1.118-1.77-1.118-3.03v-.235c0-.844.162-1.596.485-2.258.328-.667.786-1.185 1.375-1.555a3.624 3.624 0 011.969-.554c1.151 0 2.039.367 2.664 1.101.63.735.945 1.774.945 3.117v.766h-5.524c.058.698.29 1.25.696 1.656.411.407.927.61 1.547.61.869 0 1.578-.352 2.125-1.055l1.023.977a3.441 3.441 0 01-1.359 1.18c-.563.275-1.196.413-1.899.413zm-.226-7.242c-.521 0-.943.182-1.266.547-.318.365-.521.872-.609 1.523h3.617v-.14c-.042-.636-.211-1.115-.508-1.438-.297-.328-.708-.492-1.234-.492zm-87.961 21.79c0-1.324.302-2.373.906-3.15.604-.775 1.422-1.163 2.453-1.163.943 0 1.69.33 2.242.992l.11-.836h1.687V58.25h-1.898v-3.969c-.552.584-1.271.875-2.156.875-1.011 0-1.821-.393-2.43-1.18-.61-.791-.914-1.882-.914-3.273zm1.898.163c0 .865.169 1.544.508 2.04.344.489.818.734 1.422.734.75 0 1.307-.32 1.672-.961v-3.844c-.365-.615-.917-.922-1.656-.922-.605 0-1.081.242-1.43.727-.344.484-.516 1.226-.516 2.226zm12.672 3.305c-.557.656-1.349.984-2.375.984-.917 0-1.612-.268-2.086-.804-.469-.537-.703-1.313-.703-2.329v-5.476h1.898V52c0 1.073.446 1.61 1.336 1.61.922 0 1.545-.331 1.868-.993v-6.07h1.898V55h-1.789l-.047-.828zm7.492.984c-1.203 0-2.179-.377-2.929-1.133-.745-.76-1.118-1.77-1.118-3.03v-.235c0-.844.162-1.597.485-2.258.328-.667.786-1.185 1.375-1.555a3.624 3.624 0 011.969-.554c1.151 0 2.039.367 2.664 1.101.63.735.945 1.774.945 3.117v.766h-5.524c.058.698.29 1.25.696 1.656.411.407.927.61 1.547.61.869 0 1.578-.352 2.125-1.055l1.023.977a3.441 3.441 0 01-1.359 1.18c-.563.275-1.196.413-1.899.413zm-.226-7.242c-.521 0-.943.182-1.266.547-.318.364-.521.872-.609 1.523h3.617v-.14c-.042-.636-.211-1.115-.508-1.438-.297-.328-.708-.492-1.234-.492zm9.836 4.79a.86.86 0 00-.422-.774c-.276-.177-.737-.334-1.383-.47-.646-.135-1.185-.306-1.617-.515-.948-.458-1.422-1.122-1.422-1.992 0-.729.307-1.338.922-1.828.614-.49 1.396-.734 2.344-.734 1.01 0 1.825.25 2.445.75.625.5.937 1.148.937 1.945h-1.898a1.16 1.16 0 00-.406-.906c-.271-.245-.631-.367-1.078-.367-.417 0-.758.096-1.024.289a.915.915 0 00-.391.773.77.77 0 00.368.68c.244.161.739.325 1.484.492.745.161 1.328.357 1.75.586.427.224.742.495.945.812.209.318.313.703.313 1.157 0 .76-.315 1.377-.945 1.851-.631.469-1.456.703-2.477.703-.693 0-1.31-.125-1.852-.375-.541-.25-.963-.593-1.265-1.031a2.442 2.442 0 01-.453-1.414h1.843c.026.448.196.794.508 1.039.313.24.727.36 1.242.36.5 0 .881-.094 1.141-.282.26-.193.391-.443.391-.75zm5.906-8.212v2.055h1.492v1.406h-1.492v4.719c0 .323.062.557.187.703.131.14.36.21.688.21.219 0 .44-.025.664-.077v1.469c-.432.12-.849.18-1.25.18-1.458 0-2.188-.805-2.188-2.415v-4.789h-1.39v-1.406h1.39v-2.055h1.899zM256.482 55h-1.899v-8.453h1.899V55zm-2.016-10.648c0-.292.091-.534.273-.727.188-.193.454-.29.797-.29.344 0 .61.097.797.29a.998.998 0 01.281.727.988.988 0 01-.281.718c-.187.188-.453.282-.797.282-.343 0-.609-.094-.797-.282a1.006 1.006 0 01-.273-.718zm3.734 6.343c0-.828.164-1.573.493-2.234.328-.667.789-1.177 1.382-1.531.594-.36 1.276-.54 2.047-.54 1.141 0 2.065.368 2.774 1.102.713.735 1.099 1.709 1.156 2.922l.008.445c0 .834-.162 1.578-.485 2.235a3.515 3.515 0 01-1.375 1.523c-.593.36-1.281.54-2.062.54-1.193 0-2.149-.397-2.867-1.188-.714-.797-1.071-1.857-1.071-3.18v-.094zm1.899.164c0 .87.18 1.552.539 2.047.359.49.859.735 1.5.735s1.138-.25 1.492-.75c.359-.5.539-1.232.539-2.196 0-.854-.185-1.53-.555-2.03-.364-.5-.862-.75-1.492-.75-.62 0-1.112.246-1.476.741-.365.49-.547 1.224-.547 2.203zm9.328-4.312l.055.976c.625-.755 1.445-1.132 2.461-1.132 1.76 0 2.656 1.007 2.687 3.023V55h-1.898v-5.477c0-.536-.118-.932-.352-1.187-.229-.26-.607-.39-1.133-.39-.765 0-1.336.346-1.711 1.038V55h-1.898v-8.453h1.789zm11.883 6.156a.86.86 0 00-.422-.773c-.276-.177-.737-.334-1.383-.47-.646-.135-1.185-.306-1.617-.515-.948-.458-1.422-1.122-1.422-1.992 0-.729.307-1.338.922-1.828.614-.49 1.396-.734 2.344-.734 1.01 0 1.825.25 2.445.75.625.5.937 1.148.937 1.945h-1.898c0-.365-.135-.667-.406-.906-.271-.245-.63-.367-1.078-.367-.417 0-.758.096-1.024.289a.915.915 0 00-.39.773c0 .292.122.518.367.68.245.161.739.325 1.484.492.745.161 1.328.357 1.75.586.427.224.742.495.945.812.209.318.313.703.313 1.157 0 .76-.315 1.377-.945 1.851-.631.469-1.456.703-2.477.703-.693 0-1.31-.125-1.851-.375-.542-.25-.964-.593-1.266-1.031a2.442 2.442 0 01-.453-1.414h1.844c.026.448.195.794.507 1.039.313.24.727.36 1.243.36.5 0 .88-.094 1.14-.282a.892.892 0 00.391-.75z"
          fill="#212121"
        />
        <G>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M152.182 329a5.5 5.5 0 005.5-5.5v-62.772a5.5 5.5 0 00-5.5-5.5h-29.728v-19.294l-27.272 19.294H9.772a5.5 5.5 0 00-5.5 5.5V323.5a5.5 5.5 0 005.5 5.5h142.41z"
            fill="#fff"
          />
        </G>
        <Path
          d="M40.647 284.297c-.114 1.213-.563 2.161-1.344 2.844-.781.677-1.82 1.015-3.117 1.015-.906 0-1.706-.213-2.398-.64-.688-.433-1.22-1.045-1.594-1.836-.375-.792-.57-1.711-.586-2.758v-1.063c0-1.073.19-2.018.57-2.836.38-.817.925-1.448 1.633-1.89.714-.443 1.537-.664 2.469-.664 1.255 0 2.265.341 3.031 1.023.766.682 1.211 1.646 1.336 2.891h-1.969c-.093-.818-.333-1.406-.718-1.766-.38-.364-.94-.547-1.68-.547-.86 0-1.521.315-1.985.946-.458.625-.692 1.544-.703 2.757v1.008c0 1.229.22 2.167.657 2.813.442.646 1.088.968 1.937.968.776 0 1.36-.174 1.75-.523.39-.349.638-.93.742-1.742h1.969zm6.64 3.703c-.083-.161-.156-.425-.218-.789a2.956 2.956 0 01-2.219.945c-.849 0-1.541-.242-2.078-.726-.536-.485-.805-1.084-.805-1.797 0-.901.334-1.591 1-2.071.672-.484 1.63-.726 2.875-.726h1.164v-.555c0-.437-.122-.786-.367-1.047-.245-.265-.617-.398-1.117-.398-.432 0-.786.109-1.063.328a.994.994 0 00-.414.82h-1.898c0-.463.154-.895.461-1.297.307-.406.724-.723 1.25-.953a4.435 4.435 0 011.773-.343c.99 0 1.78.25 2.368.75.588.494.89 1.192.906 2.093v3.813c0 .76.107 1.367.32 1.82V288h-1.937zm-2.085-1.367a2.13 2.13 0 001.054-.274 1.82 1.82 0 00.75-.734v-1.594h-1.023c-.703 0-1.232.123-1.586.367-.354.245-.531.592-.531 1.039 0 .365.12.657.36.875.244.214.57.321.976.321zm7.453-7.086l.054.976c.625-.755 1.446-1.132 2.461-1.132 1.76 0 2.657 1.007 2.688 3.023V288H55.96v-5.477c0-.536-.118-.932-.352-1.187-.23-.261-.607-.391-1.133-.391-.766 0-1.336.347-1.71 1.039V288h-1.9v-8.453h1.79zm14.086 5.734l1.719-5.734h2.023l-3.36 9.734c-.515 1.422-1.39 2.133-2.624 2.133-.276 0-.581-.047-.914-.141v-1.468l.359.023c.48 0 .838-.088 1.078-.266.245-.171.438-.463.578-.875l.274-.726-2.97-8.414h2.048l1.789 5.734zm4.36-1.586c0-.828.163-1.573.491-2.234.329-.667.79-1.177 1.383-1.531.594-.36 1.276-.539 2.047-.539 1.14 0 2.065.367 2.773 1.101.714.735 1.1 1.708 1.157 2.922l.008.445c0 .834-.162 1.578-.485 2.235a3.518 3.518 0 01-1.375 1.523c-.594.36-1.281.539-2.062.539-1.193 0-2.149-.396-2.867-1.187-.714-.797-1.07-1.857-1.07-3.18v-.094zm1.898.164c0 .87.18 1.552.539 2.047.359.49.859.735 1.5.735.64 0 1.138-.25 1.492-.75.36-.5.539-1.232.539-2.196 0-.854-.185-1.531-.555-2.031-.364-.5-.862-.75-1.492-.75-.62 0-1.112.247-1.477.742-.364.49-.546 1.224-.546 2.203zm12.687 3.313c-.557.656-1.349.984-2.375.984-.917 0-1.612-.268-2.086-.804-.469-.537-.703-1.313-.703-2.329v-5.476h1.898V285c0 1.073.446 1.609 1.336 1.609.922 0 1.545-.33 1.868-.992v-6.07h1.898V288h-1.789l-.047-.828zm12.492-1.469a.858.858 0 00-.422-.773c-.276-.177-.737-.334-1.382-.469-.646-.136-1.185-.307-1.618-.516-.948-.458-1.421-1.122-1.421-1.992 0-.729.307-1.338.921-1.828.615-.49 1.396-.734 2.344-.734 1.01 0 1.826.25 2.446.75.624.5.937 1.148.937 1.945h-1.898c0-.365-.136-.667-.407-.906-.27-.245-.63-.368-1.078-.368-.416 0-.758.097-1.023.29a.912.912 0 00-.39.773.77.77 0 00.366.68c.245.161.74.325 1.485.492.745.161 1.328.357 1.75.586.427.224.742.495.945.812.208.318.312.703.312 1.157 0 .76-.315 1.377-.945 1.851-.63.469-1.456.703-2.476.703-.693 0-1.31-.125-1.852-.375s-.964-.594-1.266-1.031a2.442 2.442 0 01-.453-1.414h1.844c.026.448.195.794.508 1.039.312.24.726.359 1.242.359.5 0 .88-.093 1.14-.281a.893.893 0 00.391-.75zm7 .938c.474 0 .867-.138 1.18-.414a1.42 1.42 0 00.5-1.024h1.789a2.816 2.816 0 01-.492 1.477 3.243 3.243 0 01-1.25 1.078 3.733 3.733 0 01-1.703.398c-1.183 0-2.12-.383-2.813-1.148-.692-.766-1.039-1.823-1.039-3.172v-.195c0-1.287.344-2.316 1.031-3.086.688-.776 1.625-1.164 2.813-1.164 1.005 0 1.823.294 2.453.882.635.584.969 1.352 1 2.305h-1.789c-.021-.484-.188-.883-.5-1.195-.307-.313-.701-.469-1.18-.469-.614 0-1.088.224-1.422.672-.333.443-.502 1.117-.507 2.023v.305c0 .917.164 1.602.492 2.055.333.448.812.672 1.437.672zm4.547-2.946c0-.828.164-1.573.492-2.234.328-.667.789-1.177 1.383-1.531.594-.36 1.276-.539 2.047-.539 1.141 0 2.065.367 2.773 1.101.714.735 1.099 1.708 1.157 2.922l.008.445c0 .834-.162 1.578-.485 2.235a3.519 3.519 0 01-1.375 1.523c-.594.36-1.281.539-2.062.539-1.193 0-2.149-.396-2.868-1.187-.713-.797-1.07-1.857-1.07-3.18v-.094zm1.899.164c0 .87.179 1.552.539 2.047.359.49.859.735 1.5.735.64 0 1.138-.25 1.492-.75.359-.5.539-1.232.539-2.196 0-.854-.185-1.531-.555-2.031-.364-.5-.862-.75-1.492-.75-.62 0-1.112.247-1.477.742-.364.49-.546 1.224-.546 2.203zm11.992-2.578a4.776 4.776 0 00-.774-.062c-.869 0-1.455.333-1.757 1V288h-1.899v-8.453h1.813l.046.945c.459-.734 1.094-1.101 1.907-1.101.271 0 .495.036.672.109l-.008 1.781zm4.765 6.875c-1.203 0-2.179-.377-2.929-1.133-.745-.76-1.117-1.77-1.117-3.031v-.234c0-.844.161-1.597.484-2.258.328-.667.786-1.185 1.375-1.555a3.622 3.622 0 011.969-.554c1.151 0 2.039.367 2.664 1.101.63.735.945 1.774.945 3.117v.766h-5.523c.057.698.289 1.25.695 1.656.411.406.927.61 1.547.61.87 0 1.578-.352 2.125-1.055l1.023.976a3.427 3.427 0 01-1.359 1.18c-.563.276-1.195.414-1.899.414zm-.226-7.242c-.521 0-.943.182-1.266.547-.317.364-.521.872-.609 1.523h3.617v-.14c-.042-.636-.211-1.115-.508-1.438-.297-.328-.708-.492-1.234-.492zM62.295 307h-1.89v-9.133l-2.79.953v-1.601l4.438-1.633h.242V307zm11.368-4.789c0 1.635-.308 2.87-.922 3.703-.61.828-1.54 1.242-2.79 1.242-1.228 0-2.155-.403-2.78-1.211-.62-.812-.938-2.013-.954-3.601v-1.969c0-1.635.305-2.862.914-3.68.615-.817 1.55-1.226 2.805-1.226 1.245 0 2.172.398 2.781 1.195.615.797.93 1.99.946 3.578v1.969zm-1.899-2.125c0-1.068-.146-1.849-.437-2.344-.292-.5-.755-.75-1.39-.75-.62 0-1.076.237-1.368.711-.292.469-.445 1.203-.461 2.203v2.578c0 1.063.148 1.855.445 2.375.297.521.763.782 1.399.782.61 0 1.06-.24 1.351-.719.292-.485.446-1.24.461-2.266v-2.57zM76 307.977h-1.493l4.477-12.352h1.492L76 307.977zM86.81 307h-1.89v-9.133l-2.79.953v-1.601l4.438-1.633h.242V307zm11.367-4.789c0 1.635-.307 2.87-.922 3.703-.609.828-1.539 1.242-2.789 1.242-1.229 0-2.156-.403-2.78-1.211-.62-.812-.938-2.013-.954-3.601v-1.969c0-1.635.305-2.862.914-3.68.615-.817 1.55-1.226 2.805-1.226 1.245 0 2.172.398 2.781 1.195.615.797.93 1.99.945 3.578v1.969zm-1.898-2.125c0-1.068-.146-1.849-.438-2.344-.291-.5-.755-.75-1.39-.75-.62 0-1.076.237-1.367.711-.292.469-.446 1.203-.461 2.203v2.578c0 1.063.148 1.855.445 2.375.297.521.763.782 1.398.782.61 0 1.06-.24 1.352-.719.292-.485.445-1.24.46-2.266v-2.57zm5.461 3.57c0-.692.086-1.245.258-1.656.171-.411.51-.862 1.015-1.352.511-.494.834-.846.969-1.054a1.85 1.85 0 00.312-1.032c0-.489-.122-.862-.367-1.117-.239-.26-.593-.39-1.062-.39-.448 0-.81.127-1.086.382-.271.25-.406.592-.406 1.024h-1.899c.01-.922.323-1.651.938-2.188.619-.536 1.437-.804 2.453-.804 1.047 0 1.862.265 2.445.797.589.531.883 1.273.883 2.226 0 .849-.396 1.685-1.188 2.508l-.961.945c-.343.391-.52.961-.531 1.711h-1.773zm-.133 2.43c0-.307.096-.555.289-.742.193-.193.453-.289.781-.289.334 0 .597.099.789.297a.992.992 0 01.289.734.99.99 0 01-.281.719c-.187.192-.453.289-.797.289-.343 0-.609-.097-.797-.289a1.008 1.008 0 01-.273-.719z"
          fill="#212121"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}
