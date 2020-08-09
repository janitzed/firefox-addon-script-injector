export const getTranslations = () => {
    const currentLanguage = localStorage.getItem('applanguage') ? localStorage.getItem('applanguage') : 'en';

    const englishTranslation = {
        no_injections_yet: 'No injections performed',
        click_to_export: 'Click to export your scripts',
        click_to_exec: 'Click to inject script',
        changeCodeStyleBox: 'Toggle box layout',
        changeCodeTint: 'Change Source Code layout',
        execution_time: 'Injection time',
        loading: 'Loading...',
        text_executed_title: 'Executed scripts on current website',
        text_executed: 'Injections',
        text_home: 'Home',
        addon_not_available: 'This website are not supporting extensions',
        links: 'Links',
        runtime: 'Script run at',
        type: 'Script tag type',
        name: 'Script name',
        manually: 'manual',
        msg_1: 'Execute in current tab',
        msg_2: 'Execute script in all tabs',
        msg_3: 'Show script',
        msg_4: 'Delete script',
        header_0: 'Navigation',
        header_1: 'All scripts',
        header_2: 'Add script',
        header_3: 'Import',
        header_4: 'Export',
        header_5: 'Languages',
        dashboard_title: 'All saved scripts overview',
        dashboard_msg_1: 'Execute script in single selected tab',
        dashboard_msg_2: 'Execute script in all tabs',
        dashboard: 'Dashboard',
        no_script_msg_1: 'No scripts available',
        no_script_msg_2: 'Click to add a script and use the full power of this extension.',
        no_script_msg_3: 'Click to add a script',
        close_msg: 'Close message',
        add_script: 'Script properties',
        select_script_type: 'Script type',
        select_script_runtime: 'Select script runtime at',
        interactive: 'Document are loaded. DOM can be modified',
        loaded: 'Website are completely loaded.',
        timeout: 'Script execution after timeout of seconds',
        select_script_name: 'Unique script name',
        save_title: 'Save script',
        save: 'save',
        update_button: 'update',
        update_title: 'Update script',
        title_1: 'Update script',
        title_2: 'Dupplicate script',
        title_3: 'Delete script',
        title_4: 'Save changes and update script',
        title_5: 'Add new script',
        footer_1: 'Dashboard',
        export_import_warning: 'Please remember to export your settings before you are clearing the local "Cookies and site data" from the browser and then make an import of this settings in the section "Import settings" otherwise all scripts will be deleted by the browser.',
        script_info: 'Script information',
        globalNetworkError: 'Network error.',
        globalProcessError: 'Process error.',
        globalUserDoesNotExsists: 'User Account does not exsists',
        globalInvalidEmailsAdress: 'Invalid email address format',
        globalErrormessagePrefix: 'An error occured which causes the application to not work properly.',
        globalErrormessageCloseButton: 'Dismiss',
        globalErrormessageLearnMoreButton: 'Learn more',
        globalInvalidCountry: 'Invalid country',
        globalInvalidLanguage: 'Invalid language',
        globalErrorCodeTitle: 'Error code',
        globalErrorCode_1: 'Network error. When a network error occured this mean an "ajax" request failed. Check your network connection or that because the remote service currently not available.',
        globalErrorCode_2: 'App process error. It means that the ajax requests response provided an invalid structure for the application.',
        globalErrorCode_3: 'Response other then expected. Its mean the requested value of the current applications context are invalid.',
        code: 'Scripts code',
        error: 'Error',
        menu_text_export: 'Export',
        menu_title_export: 'Navigate to the export area',
        menu_text_import: 'Import',
        menu_title_import: 'Navigate to the import area',
        countriesNotFoundText: 'Sorry, no countries found',
        languages: 'Languages',
        menu_text_home: 'Home',
        menu_title_home: 'Navigate to the homepage area',
        noScripts: 'No saved scripts found. Please add a script to use the full power of this extension.',
        exportError: 'Export error with the error message',
        importError: 'Import error with the error message',
        customScriptPlaceholder: 'Your script comes here....',
        attributes: 'Attributes of choosed script (tag) type',
        attributeName: 'Attribute name',
        attributeValue: 'Attribute value',
        attr: 'Attributes',
        add: 'add',
        upload: 'Drag & Drop Script Injector`s json file here...',
        codeSearch: 'Filter selected code...',
    }

    if ('de' == currentLanguage) {
        return {
            no_injections_yet: 'Keine durchgeführten Injektionen',
            click_to_export: 'Klick um die Skripte zu exportieren',
            click_to_exec: 'Klick um das Skript zu injekten',
            changeCodeStyleBox: 'Anordnung der Webseite ändern',
            changeCodeTint: 'Source Code Layout ändern',
            execution_time: 'Injektionszeit',
            loading: 'Laden...',
            text_executed_title: 'Ausgeführte Skripte auf der jetztigen Website',
            text_executed: 'Injektionen',
            text_home: 'Startseite',
            addon_not_available: 'Diese Webseite unterstützt keine Addons',
            links: 'Links',
            runtime: 'Durchführung',
            type: 'Script Tag Typ',
            name: 'Script Name',
            manually: 'manuell',
            msg_1: 'Im aktiven Tab ausführen',
            msg_2: 'In allen Tabs ausführen',
            msg_3: 'Skript anzeigen',
            msg_4: 'Skript löschen',
            header_0: 'Navigation',
            header_1: 'Alle Skripte',
            header_2: 'Skript hinzufügen',
            header_3: 'Import',
            header_4: 'Export',
            header_5: 'Sprachen',
            dashboard_title: 'Übersicht über alle gespeicherten Skripte',
            dashboard_msg_1: 'Skript im ausgewählten Tab ausführen',
            dashboard_msg_2: 'Skript in allen Tabs ausführen',
            dashboard: 'Dashboard',
            no_script_msg_1: 'Keine Skripte vorhanden',
            no_script_msg_2: 'Klicken Sie Bitte hier und fügen Sie ein Skript hinzu um die volle Kradft dieser Erweiterung zu nutzen.',
            no_script_msg_3: 'Klick zum beifügen eines Skripts',
            close_msg: 'Mitteilung schließen',
            add_script: 'Skript Eigenschaften',
            select_script_type: 'Skript Typ',
            select_script_runtime: 'Skript Ausführungszeitpunkt festlegen',
            interactive: 'Document geladen. DOM kann modifiziert werden',
            loaded: 'Website wurde komplett geladen.',
            timeout: 'Skript Ausführung erfolg nach der Sekundenanzahl',
            select_script_name: 'Skript Namen',
            save_title: 'Skript speichern',
            save: 'speichern',
            update_button: 'aktualisieren',
            update_title: 'Skript aktualisieren',
            title_1: 'Skript aktualisieren',
            title_2: 'Skript dupplizieren',
            title_3: 'Skript löschen',
            title_4: 'Änderungen speichern',
            title_5: 'Neues Script hinzufügen',
            footer_1: 'Dashboard',
            export_import_warning: 'Ich bitte Sie um den Export Ihrer Einstellungen bevor Sie "Cookies und Website-Daten" löschen und danach einen "Import der Einstellungen" durchzuführen ansonsten werden alle Scripte von dem Browser gelöscht.',
            script_info: 'Script Informationen',
            globalNetworkError: 'Netzwerk Fehler.',
            globalProcessError: 'Interner Fehler.',
            globalUserDoesNotExsists: 'Benutzerkonto existiert nicht',
            globalInvalidEmailsAdress: 'Ungültiges E-Mail-Adressformat',
            globalErrormessagePrefix: 'Es wurde ein Fehler gefunden, der dazu führt, dass die Anwendung nicht ordnungsgemäß funktioniert.',
            globalErrormessageCloseButton: 'Ignorieren',
            globalErrormessageLearnMoreButton: 'Mehr lesen',
            globalInvalidCountry: 'Fehlerhaftes Land',
            globalInvalidLanguage: 'Fehlerhafte Sprache',
            globalErrorCodeTitle: 'Fehlercode',
            globalErrorCode_1: 'Netzwerkfehler. Wenn ein Netzwerkfehler aufgetreten ist, ist eine "Ajax" -Anforderung fehlgeschlagen. Überprüfen Sie Ihre Netzwerkverbindung oder das, da der Remote-Dienst derzeit nicht verfügbar ist.',
            globalErrorCode_2: 'App-Prozessfehler. Dies bedeutet, dass die Antwort auf Ajax-Anforderungen eine ungültige Struktur für die Anwendung bereitgestellt hat.',
            globalErrorCode_3: 'Antwort anders als erwartet. Der Mittelwert des angeforderten Werts des aktuellen Anwendungskontexts ist ungültig.',
            code: 'Skript Kod',
            error: 'Fehler',
            menu_text_export: 'Eksport',
            menu_title_export: 'Przejdź do obszaru eksportu',
            menu_text_import: 'Import',
            menu_title_import: 'Przejdź do obszaru importu',
            countriesNotFoundText: 'Sorry, dieses Land habe ich nicht gefunden',
            languages: 'Sprachen',
            menu_text_home: 'Startseite',
            menu_title_home: 'Navigiere zur Startseite',
            noScripts: 'Keine gespeicherten Skripte gefunden. Bitte fügen Sie ein Skript hinzu, um die volle Leistung dieser Erweiterung nutzen zu können. ',
            exportError: 'Export Fehler mit der Fehlermeldung',
            importError: 'Import Fehler mit der Fehlermeldung',
            customScriptPlaceholder: 'Dein Skript kommt hier....',
            attributes: 'Attribute des ausgewählten Skript (Tag) Typen',
            attributeName: 'Attribut Name',
            attributeValue: 'Attribut Wert',
            attr: 'Attribute',
            add: 'hinzufügen',
            upload: 'Drag & Drop die Script Injector`s json Datei hier...',
            codeSearch: 'Den generierten Kod filtern',
        };
    }

    else if ('en' == currentLanguage) {
        return englishTranslation;
    }

    else if ('pl' == currentLanguage) {
        return {
            no_injections_yet: 'Brak wykonanych injekcji',
            click_to_export: 'Kliknij aby dokonać eksportu do pliku',
            click_to_exec: 'Kliknij aby wykonać iniekcję skryptu',
            changeCodeStyleBox: 'Zmień układ strony',
            changeCodeTint: 'Zmień wygląd kodu',
            execution_time: 'Czas iniekcji',
            loading: 'Ładowanie...',
            text_executed_title: 'Wykonane skrypty na bieżącej stronie internetowej',
            text_executed: 'Iniekcja',
            text_home: 'Strona główna',
            addon_not_available: 'Bieżąca domena nie zezwala na używanie wtyczek',
            links: 'Linki',
            runtime: 'Uruchomienie',
            type: 'Typ tagu skryptu',
            name: 'Nazwa skryptu',
            manually: 'ręczne',
            msg_1: 'Uruchom w tym oknie ',
            msg_2: 'Uruchom we wszystkich oknach',
            msg_3: 'Pokaż skrypt',
            msg_4: 'Usuń skrypt',
            header_0: 'Nawigacja',
            header_1: 'Wsyzstkie skrypty',
            header_2: 'Dodaj skrypt',
            header_3: 'Import',
            header_4: 'Eksport',
            header_5: 'Języki',
            dashboard_title: 'Wszystkie zapisane skrypty',
            dashboard_msg_1: 'Uruchom skrypt w wybranym oknie',
            dashboard_msg_2: 'Uruchom skrypt we wszystkich oknach',
            dashboard: 'Zarządzanie',
            no_script_msg_1: 'Brak skryptów',
            no_script_msg_2: 'Kliknij aby dodać skrypt i użyć pełnej mocy tego rozszerzenia.',
            no_script_msg_3: 'Kliknij, aby dodać skrypt',
            close_msg: 'Zamknij powiadomienie',
            add_script: 'Właściwości skryptu',
            select_script_type: 'Typ skryptu',
            select_script_runtime: 'Wybierz czas wykonania skryptu',
            interactive: 'Document załadowany. DOM może być manipulowany',
            loaded: 'Strona została w pełni załadowana',
            timeout: 'Wykonanie skryptu po osiągnięciu liczby sekund',
            select_script_name: 'Nazwa skryptu',
            save_title: 'Zapisz skrypt',
            save: 'zapisz',
            update_button: 'Uaktualnij',
            update_title: 'Uaktualnienie skryptu',
            title_1: 'Uaktualnienie skryptu',
            title_2: 'Duplikacja skryptu',
            title_3: 'Kasowanie skryptu',
            title_4: 'Zapisz zmiany',
            title_5: 'Dodaj nowy skrypt',
            footer_1: 'Strona główna',
            export_import_warning: 'Proszę o wyeksportowywanie ustawień przed czyszczeniem "Ciasteczka i dane stron" a potem ich ponowny import w sekcji "Import ustawień" w innym przypadku przeglądarka skasuje wszstkie skrypty.',
            script_info: 'Informacje o skrypcie',
            globalNetworkError: 'Błąd sieci.',
            globalProcessError: 'Błąd procesu.',
            globalUserDoesNotExsists: 'Konto użytkownika nie istnieje',
            globalInvalidEmailsAdress: 'Nieprawidłowy format adresu e-mail',
            globalErrormessagePrefix: 'Znaleziono błąd, który powoduje, że aplikacja nie działa poprawnie.',
            globalErrormessageCloseButton: 'Ignoruj',
            globalErrormessageLearnMoreButton: 'Czytaj więcej',
            globalInvalidCountry: 'Niepoprawny kraj',
            globalInvalidLanguage: 'Niepoprawny język',
            globalErrorCodeTitle: 'Kod błędu',
            globalErrorCode_1: 'Błąd sieci. Gdy wystąpił błąd sieci, oznacza to, że żądanie „ajax” nie powiodło się. Sprawdź połączenie sieciowe lub to, ponieważ usługa zdalna jest obecnie niedostępna.',
            globalErrorCode_2: 'Błąd procesu aplikacji. Oznacza to, że odpowiedź na żądania ajax podała nieprawidłową strukturę aplikacji.',
            globalErrorCode_3: 'Odpowiedź inna niż oczekiwana. Oznacza to, że żądana wartość bieżącego kontekstu aplikacji jest nieprawidłowa.',
            code: 'Kod skryptu',
            error: 'Błąd',
            menu_text_export: 'Eksport',
            menu_title_export: 'Przejdź do obszaru eksportu',
            menu_text_import: 'Import',
            menu_title_import: 'Przejdź do obszaru importu',
            countriesNotFoundText: 'Przepraszam, nie znalazłem takiego kraju',
            languages: 'Języki',
            menu_text_home: 'Statystyka',
            menu_title_home: 'Przejdź do strony głównej',
            noScripts: 'Nie znaleziono zapisanych skryptów. Dodaj skrypt, aby w pełni wykorzystać możliwości tego rozszerzenia.',
            exportError: 'Błąd eksportu z błędem',
            importError: 'Błąd importu z błędem',
            customScriptPlaceholder: 'Napisz swój kod tutaj....',
            attributes: 'Atrybuty dla wybranego typu (tagu) skryptu',
            attributeName: 'Nazwa atrybutu',
            attributeValue: 'Wartość atrybutu',
            attr: 'Atrybuty',
            add: 'dodaj',
            upload: 'Przeciągnij i upuść plik json Script Injectora tutaj...',
            codeSearch: 'Szukaj w kodzie...',
        }
    }
    else {
        return englishTranslation;
    }
};